"use client";

import * as React from "react";
import { Controller } from "react-hook-form";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DateTimePicker({ control, name }: { control: any; name: string }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        const { value, onChange } = field;
        const [isOpen, setIsOpen] = React.useState(false);

        const hours = Array.from({ length: 12 }, (_, i) => i + 1);

        const handleDateSelect = (selectedDate: Date | undefined) => {
          if (selectedDate) {
            onChange(selectedDate);
          }
        };

        const handleTimeChange = (type: "hour" | "minute" | "ampm", val: string) => {
          if (value) {
            const newDate = new Date(value);
            if (type === "hour") {
              newDate.setHours((parseInt(val) % 12) + (newDate.getHours() >= 12 ? 12 : 0));
            } else if (type === "minute") {
              newDate.setMinutes(parseInt(val));
            } else if (type === "ampm") {
              const currentHours = newDate.getHours();
              newDate.setHours(val === "PM" ? currentHours + 12 : currentHours - 12);
            }
            onChange(newDate);
          }
        };

        return (
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn("w-full justify-start text-left font-normal", !value && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {value ? format(value, "MM/dd/yyyy hh:mm aa") : <span>MM/DD/YYYY hh:mm aa</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <div className="sm:flex">
                <Calendar mode="single" selected={value} onSelect={handleDateSelect} initialFocus />
                <div className="flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x">
                  {/* Hours Section */}
                  <div className="w-20 p-2 space-y-1 overflow-y-auto">
                    {hours.reverse().map((hour) => (
                      <Button
                        key={hour}
                        size="sm"
                        variant={value && value.getHours() % 12 === hour % 12 ? "default" : "ghost"}
                        className="w-full"
                        onClick={() => handleTimeChange("hour", hour.toString())}
                      >
                        {hour}
                      </Button>
                    ))}
                  </div>

                  {/* Minutes Section */}
                  <div className="w-20 p-2 space-y-1 overflow-y-auto">
                    {Array.from({ length: 12 }, (_, i) => i * 5).map((minute) => (
                      <Button
                        key={minute}
                        size="sm"
                        variant={value && value.getMinutes() === minute ? "default" : "ghost"}
                        className="w-full"
                        onClick={() => handleTimeChange("minute", minute.toString())}
                      >
                        {minute}
                      </Button>
                    ))}
                  </div>

                  {/* AM/PM Section */}
                  <div className="w-20 p-2 space-y-1">
                    {["AM", "PM"].map((ampm) => (
                      <Button
                        key={ampm}
                        size="sm"
                        variant={
                          value &&
                          ((ampm === "AM" && value.getHours() < 12) || (ampm === "PM" && value.getHours() >= 12))
                            ? "default"
                            : "ghost"
                        }
                        className="w-full"
                        onClick={() => handleTimeChange("ampm", ampm)}
                      >
                        {ampm}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        );
      }}
    />
  );
}
