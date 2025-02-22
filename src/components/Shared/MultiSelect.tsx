// "use client";

// import React, { useState } from "react";
// import { UseFormRegister, FieldErrors, RegisterOptions, Path } from "react-hook-form";
// import { Check, ChevronsUpDown, X } from "lucide-react";

// interface Option {
//     value: string;
//     label: string;
// }

// interface MultipleSelectProps<T extends Record<string, any>> {
//     name: Path<T>;
//     options: Option[];
//     placeholder?: string;
//     defaultValues?: string[];
//     register: UseFormRegister<T>;
//     errors: FieldErrors<T>;
//     validationRules: RegisterOptions<T, Path<T>>;
// }



// const MultipleSelect = <T extends Record<string, any>>({
//     name,
//     options,
//     placeholder = "Select",
//     defaultValues,
//     register,
//     errors,
//     validationRules,
// }: MultipleSelectProps<T>) => {

//     const [isOpen, setIsOpen] = useState(false);
//     const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

//     if (!control) {
//         // Render a non-controlled version if control is not provided
//         return (
//             <div className="relative">
//                 <div
//                     className="flex flex-wrap gap-2 p-2 border rounded-md cursor-pointer"
//                     onClick={() => setIsOpen(!isOpen)}
//                 >
//                     {selectedOptions?.length > 0 ? (
//                         selectedOptions?.map((item) => (
//                             <span
//                                 key={item?.value}
//                                 className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md flex items-center"
//                             >
//                                 {item?.label}
//                                 <X
//                                     className="ml-1 h-4 w-4 cursor-pointer"
//                                     onClick={(e) => {
//                                         e?.stopPropagation();
//                                         setSelectedOptions(
//                                             selectedOptions?.filter((i) => i?.value !== item?.value)
//                                         );
//                                     }}
//                                 />
//                             </span>
//                         ))
//                     ) : (
//                         <span className="text-[#5C5C5C]">{placeholder}</span>
//                     )}
//                     <ChevronsUpDown className="ml-auto h-4 w-4 text-gray-400" />
//                 </div>
//                 {isOpen && (
//                     <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
//                         {options?.map((option) => (
//                             <div
//                                 key={option.value}
//                                 className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-100"
//                                 onClick={() => {
//                                     setSelectedOptions(
//                                         selectedOptions?.some(
//                                             (item) => item?.value === option?.value
//                                         )
//                                             ? selectedOptions?.filter(
//                                                 (item) => item?.value !== option?.value
//                                             )
//                                             : [...selectedOptions, option]
//                                     );
//                                     setIsOpen(false);
//                                 }}
//                             >
//                                 <Check
//                                     className={`mr-2 h-4 w-4 ${selectedOptions?.some(
//                                         (item) => item?.value === option?.value
//                                     )
//                                         ? "text-black"
//                                         : "text-transparent"
//                                         }`}
//                                 />
//                                 {option?.label}
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         );
//     }

//     return (
//         <Controller
//             name={name}
//             control={control}
//             defaultValue={[]}
//             render={({ field }) => (
//                 <div className="relative">
//                     <div
//                         className="flex flex-wrap gap-2 p-2 border rounded-md cursor-pointer relative  bg-primary-light-gray"
//                         onClick={() => setIsOpen(!isOpen)}
//                     >
//                         {field?.value?.length > 0 ? (
//                             field?.value?.map((item: Option) => (
//                                 <span
//                                     key={item?.value}
//                                     className="bg-blue-100 text-black px-2 py-1 rounded-md flex items-center"
//                                 >
//                                     {item?.label}
//                                     <X
//                                         className="ml-1 h-4 w-4 cursor-pointer"
//                                         onClick={(e) => {
//                                             e?.stopPropagation();
//                                             field?.onChange(
//                                                 field?.value?.filter(
//                                                     (i: Option) => i?.value !== item?.value
//                                                 )
//                                             );
//                                         }}
//                                     />
//                                 </span>
//                             ))
//                         ) : defaultValues?.length > 0 ? (
//                             <span className="text-[#5C5C5C]">
//                                 <p className="text-primary-blue">
//                                     {defaultValues?.map((i) => i).join(", ")}
//                                 </p>
//                             </span>
//                         ) : (
//                             <span className="text-[#5C5C5C]"> {placeholder}</span>
//                         )}
//                         <ChevronsUpDown className="ml-auto h-4 w-4 text-gray-400 absolute top-1/2 right-2 -translate-y-1/2" />
//                     </div>
//                     {isOpen && (
//                         <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
//                             {options?.map((option) => (
//                                 <div
//                                     key={option.value}
//                                     className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-100"
//                                     onClick={() => {
//                                         const newValue = field?.value?.some(
//                                             (item: Option) => item?.value === option?.value
//                                         )
//                                             ? field?.value?.filter(
//                                                 (item: Option) => item?.value !== option?.value
//                                             )
//                                             : [...field?.value, option];
//                                         field?.onChange(newValue);
//                                         setIsOpen(false);
//                                     }}
//                                 >
//                                     <Check
//                                         className={`mr-2 h-4 w-4 ${field?.value.some(
//                                             (item: Option) => item?.value === option?.value
//                                         )
//                                             ? "text-black"
//                                             : "text-transparent"
//                                             }`}
//                                     />
//                                     {option?.label}
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             )}
//         />
//     );
// }
