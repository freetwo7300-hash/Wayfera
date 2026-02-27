"use client";

import { useParams, useRouter } from 'next/navigation';
import { Header, Footer } from '@/components/layout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Calendar, Users, Clock, Check, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

const destinations = [
  {
    id: 1,
    name: 'Santorini, Greece',
    category: 'beach',
    image: 'https://images.pexels.com/photos/161815/santorini-oia-greece-161815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 1299,
    rating: 4.9,
    reviews: 234,
    description: 'Experience the iconic white-washed buildings and stunning sunsets of this Greek paradise.',
    longDescription: 'Santorini is a stunning Greek island in the Aegean Sea, famous for its dramatic views, beautiful sunsets, and unique white-washed buildings with blue domes. This volcanic island offers a perfect blend of natural beauty, rich history, and luxurious experiences.',
    duration: '7 days',
    groupSize: '2-8 people',
    highlights: [
      'Visit the iconic blue-domed churches of Oia',
      'Watch breathtaking sunsets from Fira',
      'Explore ancient ruins at Akrotiri',
      'Wine tasting at local vineyards',
      'Relax on unique volcanic beaches',
      'Cruise around the caldera'
    ],
    included: [
      'Accommodation in 4-star hotel',
      'Daily breakfast',
      'Airport transfers',
      'Guided tours',
      'Wine tasting experience'
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Oia Exploration', description: 'Arrive in Santorini, check-in, and explore the charming village of Oia' },
      { day: 2, title: 'Fira & Museums', description: 'Visit Fira town, archaeological museum, and cable car ride' },
      { day: 3, title: 'Akrotiri & Red Beach', description: 'Explore ancient ruins and relax at the famous Red Beach' },
      { day: 4, title: 'Wine Tour', description: 'Full day wine tasting tour visiting local vineyards' },
      { day: 5, title: 'Caldera Cruise', description: 'Boat tour around the caldera with swimming stops' },
      { day: 6, title: 'Free Day', description: 'Leisure day to explore at your own pace' },
      { day: 7, title: 'Departure', description: 'Check-out and airport transfer' }
    ]
  },
  {
    id: 2,
    name: 'Swiss Alps, Switzerland',
    category: 'mountain',
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
    price: 1899,
    rating: 4.8,
    reviews: 189,
    description: 'Breathtaking mountain views and world-class skiing adventures.',
    longDescription: 'The Swiss Alps offer some of the most spectacular mountain scenery in the world. Experience pristine snow-covered peaks, charming alpine villages, and world-renowned ski resorts.',
    duration: '5 days',
    groupSize: '4-10 people',
    highlights: [
      'Ski at world-famous resorts',
      'Ride the Glacier Express train',
      'Visit Jungfraujoch - Top of Europe',
      'Explore charming alpine villages',
      'Enjoy Swiss chocolate and cheese',
      'Cable car rides with panoramic views'
    ],
    included: [
      'Luxury mountain lodge accommodation',
      'All meals included',
      'Ski pass and equipment rental',
      'Professional ski instructor',
      'Mountain railway tickets'
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Orientation', description: 'Arrive in Zurich, transfer to resort, equipment fitting' },
      { day: 2, title: 'Skiing Day 1', description: 'Full day skiing with instructor on beginner slopes' },
      { day: 3, title: 'Jungfraujoch Excursion', description: 'Visit the Top of Europe and Ice Palace' },
      { day: 4, title: 'Skiing Day 2', description: 'Advanced slopes and off-piste skiing' },
      { day: 5, title: 'Departure', description: 'Morning at leisure, transfer to airport' }
    ]
  },
  {
    id: 3,
    name: 'Tokyo, Japan',
    category: 'city',
    image: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg',
    price: 1599,
    rating: 4.9,
    reviews: 312,
    description: 'Modern metropolis with rich cultural heritage and amazing cuisine.',
    longDescription: 'Tokyo is a fascinating blend of ultra-modern and traditional, where ancient temples sit alongside towering skyscrapers. Experience cutting-edge technology, world-class cuisine, and timeless traditions.',
    duration: '6 days',
    groupSize: '2-6 people',
    highlights: [
      'Visit historic Senso-ji Temple',
      'Experience Shibuya Crossing',
      'Explore traditional Asakusa district',
      'Visit teamLab Borderless digital art museum',
      'Enjoy authentic sushi at Tsukiji Market',
      'Day trip to Mount Fuji'
    ],
    included: [
      'Central Tokyo hotel accommodation',
      'Daily breakfast',
      'JR Pass for unlimited train travel',
      'Guided city tours',
      'Mount Fuji day trip'
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Shinjuku', description: 'Arrive, check-in, explore Shinjuku and Tokyo Metropolitan Building' },
      { day: 2, title: 'Traditional Tokyo', description: 'Visit Senso-ji Temple, Asakusa, and Imperial Palace' },
      { day: 3, title: 'Modern Tokyo', description: 'Shibuya, Harajuku, teamLab Borderless museum' },
      { day: 4, title: 'Mount Fuji Day Trip', description: 'Full day excursion to Mount Fuji and Lake Kawaguchi' },
      { day: 5, title: 'Tsukiji & Akihabara', description: 'Morning fish market tour, afternoon in Akihabara' },
      { day: 6, title: 'Departure', description: 'Last-minute shopping and airport transfer' }
    ]
  },
  {
    id: 4,
    name: 'Patagonia, Chile',
    category: 'adventure',
    image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg',
    price: 2199,
    rating: 4.7,
    reviews: 156,
    description: 'Epic hiking adventures through glaciers and pristine wilderness.',
    longDescription: 'Patagonia offers some of the most dramatic and pristine wilderness on Earth. Trek through stunning landscapes of glaciers, mountains, and turquoise lakes in this ultimate adventure destination.',
    duration: '10 days',
    groupSize: '6-12 people',
    highlights: [
      'Trek the famous W Circuit in Torres del Paine',
      'Visit Perito Moreno Glacier',
      'Kayak in glacial lakes',
      'Wildlife spotting (guanacos, condors)',
      'Camp under the stars',
      'Professional mountain guides'
    ],
    included: [
      'Camping and lodge accommodation',
      'All meals during trek',
      'Professional guides and porters',
      'Camping equipment',
      'Park entrance fees'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Punta Arenas', description: 'Arrive and transfer to Puerto Natales' },
      { day: 2, title: 'Trek Day 1', description: 'Begin W Circuit trek to Base Torres' },
      { day: 3, title: 'Trek Day 2', description: 'Hike to Valle del Francés' },
      { day: 4, title: 'Trek Day 3', description: 'Continue to Glacier Grey' },
      { day: 5, title: 'Trek Day 4', description: 'Complete W Circuit and return' },
      { day: 6, title: 'Perito Moreno', description: 'Cross to Argentina, visit glacier' },
      { day: 7, title: 'Kayaking Day', description: 'Kayak in glacial lakes' },
      { day: 8, title: 'Wildlife Safari', description: 'Full day wildlife watching tour' },
      { day: 9, title: 'Rest & Relaxation', description: 'Leisure day in Puerto Natales' },
      { day: 10, title: 'Departure', description: 'Transfer to airport' }
    ]
  },
  {
    id: 5,
    name: 'Maldives',
    category: 'beach',
    image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg',
    price: 2499,
    rating: 4.9,
    reviews: 278,
    description: 'Paradise beaches, crystal-clear waters, and luxury overwater villas.',
    longDescription: 'The Maldives is the ultimate tropical paradise with pristine white-sand beaches, crystal-clear turquoise waters, and luxurious overwater bungalows. Perfect for romance, relaxation, and underwater adventures.',
    duration: '8 days',
    groupSize: '2-4 people',
    highlights: [
      'Stay in overwater villa',
      'Snorkeling with manta rays',
      'Scuba diving in coral reefs',
      'Sunset dolphin cruise',
      'Private beach dinners',
      'Spa treatments'
    ],
    included: [
      '5-star resort accommodation',
      'All-inclusive meals and drinks',
      'Water sports activities',
      'Spa treatments',
      'Seaplane transfers'
    ],
    itinerary: [
      { day: 1, title: 'Arrival', description: 'Seaplane transfer to resort, welcome dinner' },
      { day: 2, title: 'Beach Day', description: 'Relax on private beach, water sports' },
      { day: 3, title: 'Snorkeling Trip', description: 'Full day snorkeling excursion' },
      { day: 4, title: 'Scuba Diving', description: 'Diving lessons and reef exploration' },
      { day: 5, title: 'Island Hopping', description: 'Visit local islands and sandbanks' },
      { day: 6, title: 'Spa Day', description: 'Couples spa treatments and relaxation' },
      { day: 7, title: 'Sunset Cruise', description: 'Dolphin watching and romantic dinner' },
      { day: 8, title: 'Departure', description: 'Leisure morning, seaplane transfer' }
    ]
  },
  {
    id: 6,
    name: 'Machu Picchu, Peru',
    category: 'adventure',
    image: 'https://images.pexels.com/photos/1519125/pexels-photo-1519125.jpeg',
    price: 1799,
    rating: 4.8,
    reviews: 201,
    description: 'Ancient Incan ruins and challenging mountain treks.',
    longDescription: 'Discover the lost city of the Incas perched high in the Andes Mountains. Trek the famous Inca Trail through cloud forests and ancient ruins to reach the magnificent Machu Picchu.',
    duration: '7 days',
    groupSize: '8-16 people',
    highlights: [
      'Trek the classic Inca Trail',
      'Explore Machu Picchu ruins',
      'Visit Sacred Valley',
      'Experience Cusco city',
      'Traditional Peruvian cuisine',
      'Professional archaeological guides'
    ],
    included: [
      'Hotel and camping accommodation',
      'All meals during trek',
      'Professional guides and porters',
      'Machu Picchu entrance tickets',
      'Train tickets'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Cusco', description: 'Arrive and acclimatize to altitude' },
      { day: 2, title: 'Sacred Valley Tour', description: 'Visit Pisac and Ollantaytambo ruins' },
      { day: 3, title: 'Inca Trail Day 1', description: 'Begin trek from km 82' },
      { day: 4, title: 'Inca Trail Day 2', description: 'Cross Dead Woman\'s Pass (4,215m)' },
      { day: 5, title: 'Inca Trail Day 3', description: 'Visit multiple archaeological sites' },
      { day: 6, title: 'Machu Picchu', description: 'Sunrise at Machu Picchu, guided tour' },
      { day: 7, title: 'Departure', description: 'Return to Cusco, airport transfer' }
    ]
  }
];

export default function DestinationDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = parseInt(params.id as string);
  
  const destination = destinations.find(d => d.id === id);

  if (!destination) {
    return (
      <main>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Destination Not Found</h1>
            <Button onClick={() => router.back()}>Go Back</Button>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="overflow-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <Button
              variant="ghost"
              onClick={() => router.back()}
              className="text-white hover:bg-white/20 mb-6"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </Button>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold uppercase">
                  {destination.category}
                </span>
                <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                  <span className="text-white font-semibold">{destination.rating}</span>
                  <span className="text-white/80 text-sm ml-1">({destination.reviews} reviews)</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {destination.name}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{destination.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  <span>{destination.groupSize}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{destination.name}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Overview
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {destination.longDescription}
                </p>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Highlights
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {destination.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Itinerary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Itinerary
                </h2>
                <div className="space-y-6">
                  {destination.itinerary.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {item.day}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* What's Included */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  What's Included
                </h2>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                  <div className="space-y-3">
                    {destination.included.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="sticky top-24"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="text-center mb-6">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      Starting from
                    </div>
                    <div className="text-5xl font-bold text-blue-600 dark:text-blue-400">
                      ${destination.price}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 mt-1">
                      per person
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400">Duration</span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {destination.duration}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400">Group Size</span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {destination.groupSize}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-gray-600 dark:text-gray-400">Category</span>
                      <span className="font-semibold text-gray-900 dark:text-white capitalize">
                        {destination.category}
                      </span>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg py-6"
                    onClick={() => router.push(`/${params.locale}/booking`)}
                  >
                    Book Now
                  </Button>

                  <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                    Free cancellation up to 48 hours before departure
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
