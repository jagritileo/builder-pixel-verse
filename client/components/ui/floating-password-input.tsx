import * as React from "react";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

export interface FloatingPasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  error?: boolean;
}

const FloatingPasswordInput = React.forwardRef<
  HTMLInputElement,
  FloatingPasswordInputProps
>(({ className, label, icon, error, ...props }, ref) => {
  const [focused, setFocused] = React.useState(false);
  const [hasValue, setHasValue] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    setHasValue(e.target.value.length > 0);
    props.onBlur?.(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(e.target.value.length > 0);
    props.onChange?.(e);
  };

  React.useEffect(() => {
    if (props.value) {
      setHasValue(String(props.value).length > 0);
    }
  }, [props.value]);

  const shouldFloat = focused || hasValue;

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        className={cn(
          "flex h-12 w-full rounded-md border bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-transparent focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
          icon && "pl-10",
          "pr-10",
          error
            ? "border-destructive/50 focus-visible:ring-destructive/20 focus-visible:border-destructive/50"
            : "border-border/50 focus-visible:ring-primary/20 focus-visible:border-primary/50",
          className,
        )}
        ref={ref}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        {...props}
      />

      {icon && (
        <div className="absolute left-3 top-3 h-4 w-4 text-muted-foreground pointer-events-none">
          {icon}
        </div>
      )}

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
      >
        {showPassword ? (
          <EyeOff className="h-4 w-4" />
        ) : (
          <Eye className="h-4 w-4" />
        )}
      </button>

      <label
        className={cn(
          "absolute text-sm text-muted-foreground transition-all duration-200 pointer-events-none",
          icon ? "left-10" : "left-3",
          shouldFloat
            ? `top-0 -translate-y-1/2 bg-background px-1 text-xs font-medium ${
                error ? "text-destructive" : "text-primary"
              }`
            : "top-3",
        )}
      >
        {label}
      </label>
    </div>
  );
});

FloatingPasswordInput.displayName = "FloatingPasswordInput";

export { FloatingPasswordInput };
