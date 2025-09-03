import Reveal from './Reveal';
import SalonIcon from './icons/SalonIcon';
import GroceryBagIcon from './icons/GroceryBagIcon';
import LiquorIcon from './icons/LiquorIcon';
import EcommerceIcon from './icons/EcommerceIcon';

const businesses = [
  {
    icon: SalonIcon,
    title: 'Salons & Spas',
    description: 'Automate bookings, manage client relationships, and send targeted promotions with AI-powered tools.'
  },
  {
    icon: GroceryBagIcon,
    title: 'Grocery Stores',
    description: 'Optimize inventory, predict demand, and offer personalized deals to your customers.'
  },
  {
    icon: LiquorIcon,
    title: 'Liquor Stores',
    description: 'Manage age verification, track sales data, and create targeted marketing campaigns for your products.'
  },
  {
    icon: EcommerceIcon,
    title: 'E-Commerce',
    description: 'Enhance product recommendations, automate customer service, and optimize your supply chain with AI.'
  }
];

export default function Businesses() {
  return (
    <section id="businesses" className="container mx-auto px-6 py-16">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">AI for Any Business</h2>
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {businesses.map(business => (
          <Reveal key={business.title}>
            <div className="p-8 rounded-2xl glass group transition-all duration-300 hover:-translate-y-2 hover:shadow-glow text-center">
              <business.icon className="w-12 h-12 mx-auto mb-4 text-brandCyan" />
              <h3 className="text-xl font-semibold text-white mb-2">{business.title}</h3>
              <p className="text-gray-400">{business.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
