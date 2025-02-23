"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Control, Controller, FieldErrors, FieldValues, Path, RegisterOptions } from "react-hook-form"

interface MultipleSelectProps<T extends FieldValues> {
    name: Path<T>;
    placeholder?: string;
    control: Control<T>;
    errors: FieldErrors<T>;
    validationRules: RegisterOptions<T, Path<T>>;

    defaultSelected?: { value: string; label: string }[];
    items: { value: string; label: string }[];
}

export default function MultipleSelect<T extends FieldValues>({
    defaultSelected = [],
    items,
    control,
    name,
    errors,
    placeholder = "Select options",
    validationRules,
}: MultipleSelectProps<T>) {
    const [open, setOpen] = React.useState(false)

    return (
        <Controller
            name={name}
            control={control}
            rules={validationRules}
            render={({ field }) => {
                const selectedValues = field.value || defaultSelected

                const handleSelect = (value: string, label: string) => {
                    const updatedValues = selectedValues.some((item: any) => item.value === value)
                        ? selectedValues.filter((item: any) => item.value !== value)
                        : [...selectedValues, { value, label }]

                    field.onChange(updatedValues)
                }

                return (
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button variant="outline" role="combobox" aria-expanded={open} className={`w-full justify-between bg-zinc-100 text-base font-figtree py-[22px] ${errors?.[name]?.message ? "border-danger" : ""}`}>
                                {selectedValues.length > 0 ? `${selectedValues.length} selected` : placeholder}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[300px] p-0 font-figtree" side='bottom' align='start'>
                            <Command>
                                <CommandInput placeholder="Search..." />
                                <CommandList>
                                    <CommandEmpty>No options found.</CommandEmpty>
                                    <CommandGroup>
                                        {items.map((item) => (
                                            <CommandItem key={item.value} onSelect={() => handleSelect(item.value, item.label)} className="hover:bg-zinc-100 duration-150">
                                                <Check
                                                    className={cn(
                                                        "mr-2 h-4 w-4",
                                                        selectedValues.some((selected: any) => selected.value === item.value)
                                                            ? "opacity-100"
                                                            : "opacity-0"
                                                    )}
                                                />
                                                {item.label}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                )
            }}
        />
    )
}
