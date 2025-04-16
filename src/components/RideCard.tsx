
import { Clock, MapPin, DollarSign, User, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RideCardProps {
  from: string;
  to: string;
  date: string;
  time: string;
  price: number;
  seats: number;
  seatsAvailable: number;
  driverName?: string;
  driverRating?: number;
  isHistoryCard?: boolean;
  onViewDetails?: () => void;
  onBookRide?: () => void;
}

const RideCard = ({
  from,
  to,
  date,
  time,
  price,
  seats,
  seatsAvailable,
  driverName,
  driverRating,
  isHistoryCard = false,
  onViewDetails,
  onBookRide,
}: RideCardProps) => {
  return (
    <div className="card hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center mb-1">
            <MapPin size={18} className="text-golocal-primary mr-2" />
            <span className="font-medium">From: {from}</span>
          </div>
          <div className="flex items-center mt-2">
            <MapPin size={18} className="text-golocal-accent mr-2" />
            <span className="font-medium">To: {to}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-semibold text-golocal-primary">
            ${price.toFixed(2)}
          </div>
          {!isHistoryCard && (
            <div className="text-sm text-gray-500">
              {seatsAvailable} of {seats} seats available
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-4">
        <div className="flex items-center">
          <CalendarDays size={16} className="text-gray-500 mr-2" />
          <span className="text-sm">{date}</span>
        </div>
        <div className="flex items-center">
          <Clock size={16} className="text-gray-500 mr-2" />
          <span className="text-sm">{time}</span>
        </div>
      </div>

      {driverName && (
        <div className="mt-4 flex items-center">
          <User size={16} className="text-gray-500 mr-2" />
          <span className="text-sm">Driver: {driverName}</span>
          {driverRating && (
            <span className="ml-2 text-sm bg-golocal-accent/20 text-golocal-secondary px-2 py-0.5 rounded-full">
              {driverRating} ★
            </span>
          )}
        </div>
      )}

      <div className="mt-4 flex justify-end space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={onViewDetails}
        >
          {isHistoryCard ? "Receipt" : "Details"}
        </Button>
        
        {!isHistoryCard && (
          <Button
            size="sm"
            onClick={onBookRide}
          >
            Book Ride
          </Button>
        )}
      </div>
    </div>
  );
};

export default RideCard;
