
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  rating: number;
  text: string;
  image: string;
}

const TestimonialCard = ({ name, role, rating, text, image }: TestimonialCardProps) => {
  return (
    <div className="card hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start">
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover mr-4" 
        />
        <div>
          <h4 className="font-semibold text-lg">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
          <div className="flex mt-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={i < rating ? "text-golocal-accent fill-golocal-accent" : "text-gray-300"} 
              />
            ))}
          </div>
        </div>
      </div>
      <p className="mt-4 text-gray-600 italic">{text}</p>
    </div>
  );
};

export default TestimonialCard;
