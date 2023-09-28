import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classes: ClassValue[]): string {
  return twMerge(clsx(...classes));
}

// ClassValue from the clsx library: ClassValue is a type that represents a class name or an object with class names as keys.

// clsx from the clsx library: This function is used to conditionally concatenate class names.

// twMerge from the tailwind-merge library: This function is used for merging Tailwind CSS classes.

// cn This function takes an arbitrary number of arguments (via the ...classes spread syntax), which are expected to be class names or objects with class names.

// Inside the function, it uses clsx(...classes) to concatenate and merge the class names passed as arguments. clsx takes care of handling different scenarios, such as conditional classes, empty strings, and more.

// After merging the class names with clsx, it then uses twMerge to potentially merge or process the class names further. The exact behavior of twMerge depends on the specific implementation and configuration of the tailwind-merge library.

// Finally, the cn function returns a string representing the merged and processed class names.
