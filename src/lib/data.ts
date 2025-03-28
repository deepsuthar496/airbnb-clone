
export interface Property {
  id: string;
  title: string;
  location: string;
  image: string;
  price: number;
  rating: number;
  type: string;
  beds: number;
  baths: number;
  amenities: string[];
  host: {
    name: string;
    image: string;
    joinedDate: string;
  };
  description: string;
  images: string[];
}

export const propertyTypes = [
  "House",
  "Apartment",
  "Condo",
  "Villa",
  "Cabin",
  "Cottage",
  "Loft"
];

export const properties: Property[] = [
  {
    id: "1",
    title: "Modern Apartment in Downtown",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=2070",
    price: 120,
    rating: 4.8,
    type: "Apartment",
    beds: 2,
    baths: 1,
    amenities: ["Wifi", "Kitchen", "Washer", "Air conditioning", "Heating"],
    host: {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974",
      joinedDate: "January 2019"
    },
    description: "Enjoy this stylish apartment in the heart of downtown. Perfect for couples or business travelers looking for convenience and comfort. The space features modern furnishings, high-speed wifi, and all the amenities you need for a comfortable stay.",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1585128993280-9456f2f5070c?auto=format&fit=crop&q=80&w=2074"
    ]
  },
  {
    id: "2",
    title: "Cozy Beach House with Ocean View",
    location: "Malibu, CA",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2075",
    price: 250,
    rating: 4.9,
    type: "House",
    beds: 3,
    baths: 2,
    amenities: ["Beachfront", "Wifi", "Kitchen", "Free parking", "Private patio"],
    host: {
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974",
      joinedDate: "March 2018"
    },
    description: "Wake up to the sound of waves in this beautiful beach house. Enjoy breathtaking ocean views, direct beach access, and all the comforts of home. Perfect for a family vacation or a romantic getaway.",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2075",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2053",
      "https://images.unsplash.com/photo-1600566753376-12c8ab8e17a9?auto=format&fit=crop&q=80&w=2070"
    ]
  },
  {
    id: "3",
    title: "Luxury Villa with Private Pool",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2071",
    price: 350,
    rating: 4.95,
    type: "Villa",
    beds: 4,
    baths: 3,
    amenities: ["Private pool", "Hot tub", "Wifi", "Gym", "BBQ grill"],
    host: {
      name: "Jessica Williams",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1976",
      joinedDate: "May 2017"
    },
    description: "Experience luxury living in this stunning villa. Featuring a private pool, spacious rooms, and high-end furnishings, this property offers the perfect setting for a luxurious vacation. Located near the best beaches and attractions in Miami.",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2071",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=2084"
    ]
  },
  {
    id: "4",
    title: "Rustic Cabin in the Woods",
    location: "Aspen, CO",
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=2070",
    price: 180,
    rating: 4.7,
    type: "Cabin",
    beds: 2,
    baths: 1,
    amenities: ["Fireplace", "Mountain view", "Wifi", "Hiking trails", "Kitchen"],
    host: {
      name: "Robert Brown",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1974",
      joinedDate: "September 2020"
    },
    description: "Escape to this charming cabin nestled in the woods. Perfect for nature lovers and those looking to disconnect. Enjoy hiking trails, stunning mountain views, and cozy nights by the fireplace.",
    images: [
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1562133567-b6a0a9c7e6eb?auto=format&fit=crop&q=80&w=2070"
    ]
  },
  {
    id: "5",
    title: "Stylish Loft in Historic District",
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=2070",
    price: 150,
    rating: 4.85,
    type: "Loft",
    beds: 1,
    baths: 1,
    amenities: ["Exposed brick", "High ceilings", "Wifi", "Smart TV", "Rooftop access"],
    host: {
      name: "Amanda Davis",
      image: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?auto=format&fit=crop&q=80&w=1972",
      joinedDate: "November 2019"
    },
    description: "Experience city living in this beautifully renovated loft. Located in the historic district, you'll be steps away from restaurants, shops, and cultural attractions. The space features exposed brick, high ceilings, and stylish furnishings.",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1560448204-61dc0e62f8a6?auto=format&fit=crop&q=80&w=2070"
    ]
  },
  {
    id: "6",
    title: "Charming Cottage with Garden",
    location: "Portland, OR",
    image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&q=80&w=2070",
    price: 135,
    rating: 4.75,
    type: "Cottage",
    beds: 2,
    baths: 1,
    amenities: ["Garden", "Patio", "Wifi", "Grill", "Bikes available"],
    host: {
      name: "Daniel Green",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=1974",
      joinedDate: "July 2018"
    },
    description: "Relax in this charming cottage with a beautiful garden. Perfect for those who want a peaceful retreat while still being close to the city. The cottage is equipped with everything you need for a comfortable stay.",
    images: [
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1596753854990-660bbccc4a2e?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?auto=format&fit=crop&q=80&w=2070"
    ]
  },
  {
    id: "7",
    title: "Skyline Penthouse with Terrace",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1594540637720-9b14737e31f6?auto=format&fit=crop&q=80&w=2070",
    price: 280,
    rating: 4.9,
    type: "Condo",
    beds: 2,
    baths: 2,
    amenities: ["City view", "Terrace", "Parking", "Gym", "24/7 doorman"],
    host: {
      name: "Emily Wilson",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1976",
      joinedDate: "February 2021"
    },
    description: "Take in breathtaking city views from this luxury penthouse. The spacious terrace is perfect for morning coffee or evening cocktails with a view. The building offers premium amenities and is located in a prime downtown location.",
    images: [
      "https://images.unsplash.com/photo-1594540637720-9b14737e31f6?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1598928636135-d146006ff4be?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1632558262155-9a4d3e72e27f?auto=format&fit=crop&q=80&w=2071"
    ]
  },
  {
    id: "8",
    title: "Historic Brownstone with Character",
    location: "Boston, MA",
    image: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&q=80&w=2070",
    price: 195,
    rating: 4.8,
    type: "House",
    beds: 3,
    baths: 1.5,
    amenities: ["Historic details", "Fireplace", "Backyard", "Laundry", "Wifi"],
    host: {
      name: "Thomas Martin",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1974",
      joinedDate: "October 2017"
    },
    description: "Step back in time in this beautifully preserved brownstone. Featuring original moldings, hardwood floors, and a working fireplace, this home offers a unique stay with all the modern conveniences. Located in a historic neighborhood with easy access to attractions.",
    images: [
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1600488999585-e4364713b90a?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1503174971373-b1f69f7279fc?auto=format&fit=crop&q=80&w=2013"
    ]
  }
];
