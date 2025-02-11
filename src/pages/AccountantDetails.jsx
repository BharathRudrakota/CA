import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AccountantDetails = () => {
  const { id } = useParams();
  const [accountant, setAccountant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccountantDetails = async () => {
      try {
        const response = {
          "charteredAccountants": [
            {
              "id": 1,
              "name": "Michael Jackson",
              "image": "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?fit=crop&w=800&q=80",
              "intro": "Expertise in accounting and finance, specializing in financial statements and auditing.",
              "rating": 4.8,
              "reviewCount": 89,
              "taskComplexity": "Basic to complex tasks",
              "price": "€4,370",
              "deliveryTime": "Delivers within 2 days",
              "testimonial": {
                "text": "Exceptional service in managing personal finances and deep understanding of financial markets.",
                "author": "John Doe"
              },
              "about": {
                "from": "INDIA",
                "partnerSince": 2011,
                "averageResponseTime": "30 minutes",
                "description": "Professional Chartered Accountant offering diverse accounting and financial services.",
                "services": ["Financial accounting", "Bookkeeping", "Balance Sheets"],
                "benefits": ["One-time delivery", "24/7 support"]
              }
            },
            {
              "id": 2,
              "name": "Lucy Brown",
              "image": "https://res.cloudinary.com/dahxee8xu/image/upload/v1737476824/samples/look-up.jpg",
              "intro": "Dedicated accountant with expertise in taxation and corporate finance.",
              "rating": 4.5,
              "reviewCount": 75,
              "taskComplexity": "Intermediate to advanced tasks",
              "price": "€3,900",
              "deliveryTime": "Delivers within 3 days",
              "testimonial": {
                "text": "Lucy has been an invaluable asset to our company's financial planning.",
                "author": "Alice Martin"
              },
              "about": {
                "from": "USA",
                "partnerSince": 2013,
                "averageResponseTime": "45 minutes",
                "description": "Committed to delivering top-notch accounting services to businesses and individuals.",
                "services": ["Taxation", "Corporate Finance", "Auditing"],
                "benefits": ["Error-free documentation", "Expert consultations"]
              }
            },
            {
              "id": 3,
              "name": "Robert Smith",
              "image": "https://res.cloudinary.com/dahxee8xu/image/upload/v1737476824/samples/smile.jpg",
              "intro": "Experienced in overseeing financial management of medium to large enterprises.",
              "rating": 4.6,
              "reviewCount": 65,
              "taskComplexity": "Advanced financial tasks",
              "price": "€4,500",
              "deliveryTime": "Delivers within 4 days",
              "testimonial": {
                "text": "Robert's strategic approach to financial management has been pivotal to our company's success.",
                "author": "James Walker"
              },
              "about": {
                "from": "UK",
                "partnerSince": 2010,
                "averageResponseTime": "25 minutes",
                "description": "Specialized in strategic financial planning and corporate finance.",
                "services": [
                  "Corporate finance",
                  "Strategic planning",
                  "Asset management"
                ],
                "benefits": [
                  "Comprehensive financial review",
                  "Customized financial solutions"
                ]
              }
            },
            {
              "id": 4,
              "name": "Anita Patel",
              "image": "https://res.cloudinary.com/dahxee8xu/image/upload/v1737476824/samples/man-portrait.jpg",
      
              "intro": "Passionate about helping startups navigate the complexities of financial compliance.",
              "rating": 4.9,
              "reviewCount": 95,
              "taskComplexity": "Basic to intermediate tasks",
              "price": "€3,900",
              "deliveryTime": "Delivers within 2 days",
              "testimonial": {
                "text": "Anita's insights have been invaluable to our startup. Her expertise in financial compliance is unmatched.",
                "author": "Raj Mehta"
              },
              "about": {
                "from": "INDIA",
                "partnerSince": 2018,
                "averageResponseTime": "20 minutes",
                "description": "Focuses on financial compliance and advisory services for startups.",
                "services": ["Financial compliance", "Advisory services", "Tax planning"],
                "benefits": ["Startup-friendly", "Tailored financial strategies"]
              }
            },
            {
              "id": 5,
              "name": "Johnathan Lee",
              "image": "https://images.unsplash.com/photo-1556157382-97eda2d62296?fit=crop&w=800&q=80",
              "intro": "Expert in streamlining business operations with financial acumen.",
              "rating": 4.5,
              "reviewCount": 72,
              "taskComplexity": "Intermediate tasks",
              "price": "€4,200",
              "deliveryTime": "Delivers within 3 days",
              "testimonial": {
                "text": "Johnathan's ability to marry financial expertise with operational efficiency has transformed our business.",
                "author": "Linda Kim"
              },
              "about": {
                "from": "CANADA",
                "partnerSince": 2012,
                "averageResponseTime": "35 minutes",
                "description": "Specializing in operational finance and business transformation.",
                "services": [
                  "Operational finance",
                  "Business strategy",
                  "Risk assessment"
                ],
                "benefits": ["Business transformation", "Operational efficiency"]
              }
            },
            {
              "id": 6,
              "name": "Sophia Fernandez",
              "image": "https://res.cloudinary.com/dahxee8xu/image/upload/v1737476815/samples/landscapes/girl-urban-view.jpg",
              "intro": "Champion in guiding SMEs through their financial journeys with transparency and integrity.",
              "rating": 4.8,
              "reviewCount": 88,
              "taskComplexity": "Basic to advanced tasks",
              "price": "€4,250",
              "deliveryTime": "Delivers within 2 days",
              "testimonial": {
                "text": "Sophia's consultative approach and deep knowledge have helped our business thrive financially.",
                "author": "Carlos Rodriguez"
              },
              "about": {
                "from": "SPAIN",
                "partnerSince": 2016,
                "averageResponseTime": "28 minutes",
                "description": "Dedicated to offering top-tier financial consulting for small to medium enterprises.",
                "services": ["Financial consulting", "SME advisory", "Growth strategies"],
                "benefits": ["Transparent communication", "Integrity-driven solutions"]
              }
            },
            {
              "id": 7,
              "name": "William O'Connell",
              "image": "https://res.cloudinary.com/dahxee8xu/image/upload/v1737476824/samples/man-on-a-street.jpg",
              "intro": "Master of tax strategy and international finance regulations.",
              "rating": 4.6,
              "reviewCount": 78,
              "taskComplexity": "Advanced tasks",
              "price": "€5,000",
              "deliveryTime": "Delivers within 4 days",
              "testimonial": {
                "text": "William's strategies saved us from major tax implications during our international expansion.",
                "author": "Fiona Gallagher"
              },
              "about": {
                "from": "IRELAND",
                "partnerSince": 2009,
                "averageResponseTime": "32 minutes",
                "description": "Expertise in handling complex international finance and tax scenarios.",
                "services": [
                  "Tax strategy",
                  "International finance",
                  "Regulatory compliance"
                ],
                "benefits": ["Global finance solutions", "Tax efficiency"]
              }
            },
            {
              "id": 8,
              "name": "Nina Johansson",
              "image": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?fit=crop&w=800&q=80",
              "intro": "Specializes in financial forensics and fraud examination.",
              "rating": 4.9,
              "reviewCount": 92,
              "taskComplexity": "Advanced forensic tasks",
              "price": "€5,150",
              "deliveryTime": "Delivers within 5 days",
              "testimonial": {
                "text": "Nina's forensic skills have been instrumental in protecting our firm from potential financial frauds.",
                "author": "Marcus Blom"
              },
              "about": {
                "from": "SWEDEN",
                "partnerSince": 2013,
                "averageResponseTime": "26 minutes",
                "description": "Focused on protecting businesses through financial forensics and fraud examination.",
                "services": [
                  "Financial forensics",
                  "Fraud examination",
                  "Risk management"
                ],
                "benefits": ["Financial protection", "Fraud prevention"]
              }
            },
            {
              "id": 9,
              "name": "Oliver Bernard",
              "image": "https://res.cloudinary.com/dahxee8xu/image/upload/v1737476826/cld-sample.jpg",
              "intro": "Dedicated to empowering non-profits with financial strategies and sustainability.",
              "rating": 4.7,
              "reviewCount": 85,
              "taskComplexity": "Intermediate to advanced tasks",
              "price": "€4,800",
              "deliveryTime": "Delivers within 3 days",
              "testimonial": {
                "text": "Oliver's insights have optimized our non-profit's financial health and long-term sustainability.",
                "author": "Clara Mathews"
              },
              "about": {
                "from": "AUSTRALIA",
                "partnerSince": 2017,
                "averageResponseTime": "30 minutes",
                "description": "Passionate about bolstering the financial backbone of non-profit organizations.",
                "services": [
                  "Non-profit finance",
                  "Sustainability planning",
                  "Grants management"
                ],
                "benefits": ["Enhanced sustainability", "Optimized financial health"]
              }
            },
            {
              "id": 10,
              "name": "Isabella Martinez",
              "image": "https://res.cloudinary.com/dahxee8xu/image/upload/v1737476815/samples/people/smiling-man.jpg",
              "intro": "Expert in mergers, acquisitions, and corporate restructuring with a decade of experience.",
              "rating": 4.8,
              "reviewCount": 90,
              "taskComplexity": "Complex corporate tasks",
              "price": "€6,000",
              "deliveryTime": "Delivers within 6 days",
              "testimonial": {
                "text": "Isabella played a pivotal role in our successful merger, showcasing exemplary financial acumen.",
                "author": "Rafael Vega"
              },
              "about": {
                "from": "MEXICO",
                "partnerSince": 2014,
                "averageResponseTime": "28 minutes",
                "description": "Specializes in navigating the financial complexities of mergers and acquisitions.",
                "services": [
                  "Mergers and acquisitions",
                  "Corporate restructuring",
                  "Financial strategy"
                ],
                "benefits": ["Strategic financial guidance", "Efficient restructuring"]
              }
            }
          ]
        }
        
        console.log(response)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const selectedAccountant = data.charteredAccountants.find(
          (acc) => acc.id === parseInt(id)
        );
        setAccountant(selectedAccountant);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch accountant details. Please try again later.');
        setLoading(false);
      }
    };

    fetchAccountantDetails();
  }, [id]);

  if (loading) return <p className="message">Loading details...</p>;
  if (error) return <p className="error-message">{error}</p>;
  if (!accountant) return <p className="message">Accountant not found.</p>;

  return (
    <div className="account-details">
      <h2>{accountant.name}</h2>
      <img src={accountant.image} alt={accountant.name} />
      <p>{accountant.intro}</p>
      <p>
        <strong>Rating:</strong> {accountant.rating} ⭐
      </p>
      <p>
        <strong>Price:</strong> {accountant.price}
      </p>
      <p>
        <strong>Delivery Time:</strong> {accountant.deliveryTime}
      </p>
      <p>
        <strong>About:</strong> {accountant.about.description}
      </p>
      <p>
        <strong>Testimonial:</strong> "{accountant.testimonial.text}" - {accountant.testimonial.author}
      </p>
    </div>
  );
};

export default AccountantDetails;