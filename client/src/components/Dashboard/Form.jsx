import { useState } from "react";
import LoadingSVG from "../../assets/svg/loading.svg"
import { addMarketing } from '../../api/marketing';

const Form = ({ closeModal }) => {
    const [loadingForm, setLoadingForm] = useState(false);
    const [formData, setFormData] = useState({ name: "" });
    const [alertMessage, setAlertMessage] = useState("")


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoadingForm(true)

        try {
            const response = await addMarketing('/marketing', formData);
            console.log('Data successfully posted:', response);

            setLoadingForm(false)
            setAlertMessage("Marketing data Successfully added");

            closeModal();

            setTimeout(() => {
                setAlertMessage("");
            }, 3000);
            // setCloseModal(true)
        } catch (error) {
            setLoadingForm(false);
            console.error('Error posting data:', error);
            setAlertMessage("Failed to add marketing data. Please try again.");
        }
    };

    return (
        <div className="">
            {alertMessage && (
                <div className="mb-4 p-2 text-center text-white bg-green-600 rounded-lg -z-50">
                    {alertMessage}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-md font-bold text-gray-700">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter your full name"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full mt-4 py-3 px-6 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 cursor-pointer hover:not-focus:bg-indigo-700"
                    disabled={loadingForm}
                >
                    {loadingForm ? (
                        <img src={LoadingSVG} alt="Loading Icon" className="h-6 w-6 animate-spin mx-auto text-amber-300" />
                    ) : (
                        'Submit'
                    )}
                </button>
            </form >
        </div>
    );
};

export default Form;

