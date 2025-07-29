export default function Page(){
    const submitForm  = async (formData) => {
        "use server";
        const formFields = {
            email: formData.get("email"),
            message: formData.get("message")
        }

        console.log("Form Fields ", formFields);
        console.log("TODO: Send data to backend");
        return formFields;
    }
    return(
        <main  className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="text-2xl text-bold text-center mb-6">Contact Page</h1>
            <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
                <form className="space-y-4" action={submitForm}>
                    <div>
                        <label 
                            className="block text-sm font-medium text-gray-700" 
                            htmlFor="email">Email</label>
                        <input 
                            id="email" 
                            type="email" 
                            name="email" 
                            className="border border-gray-300 focust-border-blue-500 focus:ring-2 focus:ring-blue-500 w-1/1" 
                            required></input>
                    </div>
                    <div>
                        <label 
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea 
                            id="message" 
                            name="message" 
                            className="border border-gray-300 focust-border-blue-500 focus:ring-2 focus:ring-blue-500"
                            required rows="4"></textarea>
                    </div>
                    <button 
                        type="submit"
                        className="text-white bg-blue-600 rounded-md p-3">Send Message</button>
                </form>
            </div>
        </main>
    );
}