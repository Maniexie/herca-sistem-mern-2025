import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader,
    Input,
    Typography
} from "@material-tailwind/react";
import { addMarketing } from "../../api/marketing";
import AlertCustom from "../../components/AlertCustom";

export function ModalAddMarketing({ onAdd }) {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    const handleOpen = () => setOpen(!open);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addMarketing("/marketing", { name });
            if (response && response._id) {
                setShowAlert(true);
                setName("");
                onAdd(response);
                handleOpen();
            } else {
                alert("Failed to add Marketing");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while adding the Marketing");
        }
    };

    return (
        <div>
            <Button
                onClick={handleOpen}
                variant="gradient"
                className="hover:bg-amber-300 cursor-pointer"
            >
                Add Product
            </Button>

            <Dialog
                open={open}
                handler={handleOpen}
                className="p-4 bg-white shadow-xl rounded-lg max-w-md w-full"
                backdropProps={{ className: "bg-black/50" }} // Perbaikan overlay
            >
                <DialogHeader>
                    <Typography variant="h4" color="blue-gray">Manage Item</Typography>
                    <Typography className="mt-1 font-normal text-gray-600">
                        Keep your records up-to-date and organized.
                    </Typography>
                </DialogHeader>

                <DialogBody className="space-y-4 pb-6">
                    <div>
                        <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
                            Name
                        </Typography>
                        <Input
                            color="gray"
                            size="lg"
                            placeholder="e.g : John Bengkel"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="placeholder:opacity-100 focus:!border-t-gray-900 rounded-lg"
                            containerProps={{ className: "!min-w-full" }}
                            labelProps={{ className: "hidden" }}
                        />
                    </div>
                </DialogBody>

                <DialogFooter>
                    <Button variant="text" color="red" onClick={handleOpen} className="hover:bg-gray-600 cursor-pointer">
                        Back
                    </Button>
                    <Button className="ml-auto cursor-pointer" onClick={handleSubmit}>
                        Submit
                    </Button>
                </DialogFooter>
            </Dialog>
            {showAlert && <AlertCustom>Berhasil menambahkan data Marketing</AlertCustom>}
        </div>
    );
}

