import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
/**
 * Merges class names with Tailwind CSS classes
 * Combines clsx for conditional logic and tailwind-merge for handling conflicting tailwind classes
 */
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
