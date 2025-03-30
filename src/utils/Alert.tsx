import Swal, { SweetAlertIcon } from "sweetalert2";

type ToastPosition =
  | "top"
  | "top-start"
  | "top-end"
  | "center"
  | "center-start"
  | "center-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end";

interface ToastOptions {
  title: string;
  icon?: SweetAlertIcon;
  position?: ToastPosition;
  timer?: number;
  showConfirmButton?: boolean;
  progressBarColor?: string;
}

// Icon to color mapping
const iconColors = {
  success: "#48c78e", // green
  error: "#f14668", // red
  warning: "#ffe08a", // yellow
  info: "#3e8ed0", // blue
  question: "#8c54ff", // purple
};

// SolidJS hook for alerts
export function createAlert() {
  const toast = (options: ToastOptions) => {
    const {
      title,
      icon = "success",
      position = "top-end",
      timer = 3000,
      showConfirmButton = false,
      progressBarColor = iconColors[icon] || "#48c78e",
    } = options;

    return Swal.fire({
      toast: true,
      title,
      icon,
      position,
      timer,
      timerProgressBar: true,
      showConfirmButton,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);

        // Set progress bar color
        const timerProgressBar = Swal.getTimerProgressBar();
        if (timerProgressBar) {
          timerProgressBar.style.background = progressBarColor;
        }
      },
    });
  };

  const success = (title: string, options?: Partial<ToastOptions>) => {
    return toast({ title, icon: "success", ...options });
  };

  const error = (title: string, options?: Partial<ToastOptions>) => {
    return toast({ title, icon: "error", ...options });
  };

  const warning = (title: string, options?: Partial<ToastOptions>) => {
    return toast({ title, icon: "warning", ...options });
  };

  const info = (title: string, options?: Partial<ToastOptions>) => {
    return toast({ title, icon: "info", ...options });
  };

  const question = (title: string, options?: Partial<ToastOptions>) => {
    return toast({ title, icon: "question", ...options });
  };

  return {
    toast,
    success,
    error,
    warning,
    info,
    question,
  };
}

// Static version for direct imports
const Alert = {
  toast: ({
    title,
    icon = "success",
    position = "top-end",
    timer = 3000,
    showConfirmButton = false,
    progressBarColor,
  }: ToastOptions) => {
    return Swal.fire({
      toast: true,
      title,
      icon,
      position,
      timer,
      timerProgressBar: true,
      showConfirmButton,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);

        // Set progress bar color based on icon or custom color
        const timerProgressBar = Swal.getTimerProgressBar();
        if (timerProgressBar) {
          const color = progressBarColor || iconColors[icon] || "#48c78e";
          timerProgressBar.style.background = color;
        }
      },
    });
  },
  success: (title: string, options?: Partial<ToastOptions>) => {
    return Alert.toast({ title, icon: "success", ...options });
  },
  error: (title: string, options?: Partial<ToastOptions>) => {
    return Alert.toast({ title, icon: "error", ...options });
  },
  warning: (title: string, options?: Partial<ToastOptions>) => {
    return Alert.toast({ title, icon: "warning", ...options });
  },
  info: (title: string, options?: Partial<ToastOptions>) => {
    return Alert.toast({ title, icon: "info", ...options });
  },
  question: (title: string, options?: Partial<ToastOptions>) => {
    return Alert.toast({ title, icon: "question", ...options });
  },
};

export default Alert;
