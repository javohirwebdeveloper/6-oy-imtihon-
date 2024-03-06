import { useState } from "react";
import "tailwindcss/tailwind.css";

function PlanBox({ name, price, plan, onTrial, onChoose, value }) {
  return (
    <div className="plan-box shadow-lg rounded-lg p-[50px] border-2 border-[#262626]  bg-[#1A1A1A] ">
      <h2 className="text-[24px] font-bold">{name} Plan</h2>
      <p className="text-[18px] text-[#999999] mt-[16px] ">{value}</p>
      <p className="text-xl flex gap-x-[4px] items-end mt-[50px] mb-[50px] ">
        <h1 className="text-[40px]">${price}</h1>{" "}
        <p className="text-[#999999]">/{plan}</p>
      </p>{" "}
      <button
        className="bg-green-500 text-white rounded-md px-4 py-2"
        onClick={() => onTrial(name)}
      >
        Start Free Trial
      </button>
      <button
        className="bg-blue-500 text-white rounded-md px-4 py-2"
        onClick={() => onChoose(name)}
      >
        Choose Plan
      </button>
    </div>
  );
}

const Subscription = () => {
  const [plan, setPlan] = useState("monthly"); 
  const [prices, setPrices] = useState({
    basic: 10,
    standard: 20,
    premium: 30,
  });

  const handlePlanChange = (newPlan) => {
    setPlan(newPlan);
    if (newPlan === "monthly") {
      setPrices({
        basic: "9.99",
        standard: "12.99",
        premium: "14.99",
      });
    } else if (newPlan === "yearly") {
      setPrices({
        basic: 100,
        standard: 200,
        premium: 300,
      });
    }
  };

  const handleStartTrial = (planName) => {
    console.log(`You have started a free trial for ${planName} plan`);
  };

  const handleChoosePlan = (planName) => {
    console.log(`You have chosen the ${planName} plan`);
  };

  return (
    <div className="container">
      <div className="subscription-page flex flex-col items-center mt-[220px] ">
        <div className=" w-full flex justify-between ">
          <div>
            <h1 className="text-4xl font-bold text-[48px] mb-[14px] ">
              Choose the plan that's right for you
            </h1>
            <p className="text-[#999999] text-[18px] ">
              Join StreamVibe and select from our flexible subscription options
              tailored to suit your viewing preferences. Get ready for non-stop
              entertainment!
            </p>
          </div>
          <div className="plan-buttons flex bg-[#0F0F0F] border-2 border-[#262626] p-[10px] rounded-[10px] ">
            <button
              className={`bg-transparent h-[55px] w-[118px] text-[18px] text-white  rounded-[10px] px-4 py-2 ${
                plan === "monthly" ? "bg-[#1F1F1F] text-[#999999]" : ""
              }`}
              onClick={() => handlePlanChange("monthly")}
            >
              Monthly
            </button>
            <button
              className={` bg-transparent  h-[55px] w-[118px] text-[18px] text-white  rounded-[10px] px-4 py-2 ${
                plan === "yearly" ? "bg-[#1F1F1F] text-[#999999]" : ""
              }`}
              onClick={() => handlePlanChange("yearly")}
            >
              Yearly
            </button>
          </div>
        </div>
        <div className="plan-boxes flex gap-x-[30px] mt-[80px] ">
          <PlanBox
            name="Basic"
            price={prices.basic}
            plan={plan}
            onTrial={handleStartTrial}
            onChoose={handleChoosePlan}
            value="Enjoy an extensive library of movies and shows, featuring a range of
        content, including recently released titles."
          />{" "}
          <PlanBox
            name="Standard"
            price={prices.standard}
            plan={plan}
            onTrial={handleStartTrial}
            onChoose={handleChoosePlan}
            value="Access to a wider selection of movies and shows, including most new releases and exclusive content"
          />{" "}
          <PlanBox
            name="Premium"
            price={prices.premium}
            plan={plan}
            onTrial={handleStartTrial}
            onChoose={handleChoosePlan}
            value="Access to a widest selection of movies and shows, including all new releases and Offline Viewing"
          />{" "}
        </div>
      </div>
    </div>
  );
};


export default Subscription;