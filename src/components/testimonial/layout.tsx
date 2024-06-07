import { TestimonialComponent } from ".";
import { Footer } from "../footer";

export const ContactUs: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <TestimonialComponent />
            </div>
            <Footer />
        </div>
    );
};
