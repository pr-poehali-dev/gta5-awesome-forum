import { useState } from "react";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface RatingProps {
  value: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
  showValue?: boolean;
  onChange?: (rating: number) => void;
  className?: string;
}

const Rating = ({
  value,
  maxRating = 5,
  size = "md",
  interactive = false,
  showValue = false,
  onChange,
  className,
}: RatingProps) => {
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  const handleClick = (rating: number) => {
    if (interactive && onChange) {
      onChange(rating);
    }
  };

  const handleMouseEnter = (rating: number) => {
    if (interactive) {
      setHoverRating(rating);
    }
  };

  const handleMouseLeave = () => {
    if (interactive) {
      setHoverRating(null);
    }
  };

  const displayRating = hoverRating !== null ? hoverRating : value;

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: maxRating }, (_, index) => {
          const starValue = index + 1;
          const isFilled = starValue <= displayRating;
          const isPartiallyFilled = starValue - 0.5 <= displayRating && starValue > displayRating;

          return (
            <div
              key={index}
              className={cn(
                "relative",
                interactive && "cursor-pointer transition-transform hover:scale-110"
              )}
              onClick={() => handleClick(starValue)}
              onMouseEnter={() => handleMouseEnter(starValue)}
              onMouseLeave={handleMouseLeave}
            >
              <Icon
                name="Star"
                className={cn(
                  sizeClasses[size],
                  isFilled
                    ? "text-yellow-400 fill-yellow-400"
                    : isPartiallyFilled
                    ? "text-yellow-400"
                    : "text-muted-foreground"
                )}
              />
              {isPartiallyFilled && (
                <Icon
                  name="Star"
                  className={cn(
                    sizeClasses[size],
                    "absolute top-0 left-0 text-yellow-400 fill-yellow-400",
                    "clip-path-half"
                  )}
                  style={{
                    clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
      {showValue && (
        <span className={cn("font-medium text-foreground", textSizeClasses[size])}>
          {value.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default Rating;