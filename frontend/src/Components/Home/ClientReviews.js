import React from "react";
import ClientReviewCard from "./ClientReviewCard";
import TitleSection from "../Global/TitleSection";

function ClientReviews() {
    return (
        <section className="reviews px-5 xl:px-48">
            <TitleSection title="What People Say About Us" />

            <div className="relative flex flex-col md:flex-row">
                <ClientReviewCard
                    avatar="/assets/img/avatars/avatar-1.jpg"
                    name="Al amin"
                    location="Dhaka, BD"
                    rating={5}
                    review="Lorem ipsum, dolor sit amet consectetur adipisicing
                            consectetur adipisicing elit. Dolor, explicabo
                            cupiditate. Alias, sequi"
                />

                <ClientReviewCard
                    avatar="/assets/img/avatars/avatar-2.jpg"
                    name="Faiza Faisal"
                    location="lahor - Pakistan"
                    rating={5}
                    review="Lorem ipsum, dolor sit amet consectetur adipisicing
                            consectetur adipisicing elit. Dolor, explicabo
                            cupiditate. Alias, sequiLorem ipsum, dolor sit amet consectetur adipisicing
                            consectetur adipisicing elit. Dolor, explicabo
                            cupiditate. Alias, sequi"
                />

                <ClientReviewCard
                    avatar="/assets/img/avatars/avatar-3.jpg"
                    name="Rohan sarma"
                    location="Dehli  - India"
                    rating={5}
                    review="Lorem ipsum, dolor sit amet consectetur adipisicing
                            consectetur adipisicing elit. Dolor, explicabo
                            cupiditate. Alias, sequi"
                />
            </div>
        </section>
    );
}

export default ClientReviews;
