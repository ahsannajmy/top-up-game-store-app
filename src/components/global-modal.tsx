import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogTrigger } from "./ui/dialog";

interface GlobalModalProps {
  openModalButtonTitle?: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  buttonVariant?:
    | "link"
    | "default"
    | "destructive"
    | "warning"
    | "outline"
    | "secondary"
    | "ghost"
    | "brutal"
    | "brutal-normal"
    | null;
}

export const GlobalModal: React.FC<GlobalModalProps> = (props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={props.buttonVariant || "brutal"}>
          <div
            className={`flex flex-row items-center ${
              props.icon && props.openModalButtonTitle ? "gap-2" : ""
            }`}
          >
            <span>{props.openModalButtonTitle}</span>
            {props.icon ? <props.icon /> : ""}
          </div>
        </Button>
      </DialogTrigger>
      {props.children}
    </Dialog>
  );
};
