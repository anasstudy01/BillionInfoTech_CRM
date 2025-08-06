import React from 'react'
import DashboardNav from '../Components/main/DashboardNav'
import BonusCard from '../Components/main/BonusCard'

const BonusLayout = () => {
  return (<>

  <DashboardNav heading="Bonuses & Promotions"  location="Bonuses & Promotions  " />

    <div className="bonus-container bg-gray-50 flex mx-auto px-4 py-4 gap-4 flex-wrap justify-center max-w-screen-xl">
        <BonusCard 
          icon="🎁"
          title="Welcome Bonus"
          description="Get 100% bonus on your first deposit."
          info="Min Deposit: $100"
          buttonText="Claim"
        />
        <BonusCard 
          icon=" 💰"
          title="Welcome Bonus"
          description="Get 100% bonus on your first deposit."
          info="Min Deposit: $100"
          buttonText="Claim"
        />
        <BonusCard 
          icon=" 🔄"
          title="Welcome Bonus"
          description="Get 100% bonus on your first deposit."
          info="Min Deposit: $100"
          buttonText="Claim"
        />
        <BonusCard 
          icon="🎯"
          title="Welcome Bonus"
          description="Get 100% bonus on your first deposit."
          info="Min Deposit: $100"
          buttonText="Claim"
        />
        <BonusCard 
          icon="🎁"
          title="Welcome Bonus"
          description="Get 100% bonus on your first deposit."
          info="Min Deposit: $100"
          buttonText="Claim"
        />
         <BonusCard 
          icon="🎁"
          title="Welcome Bonus"
          description="Get 100% bonus on your first deposit."
          info="Min Deposit: $100"
          buttonText="Claim"
        />
         <BonusCard 
          icon="🎁"
          title="Welcome Bonus"
          description="Get 100% bonus on your first deposit."
          info="Min Deposit: $100"
          buttonText="Claim"
        />
         <BonusCard 
          icon="🎁"
          title="Welcome Bonus"
          description="Get 100% bonus on your first deposit."
          info="Min Deposit: $100"
          buttonText="Claim"
        />


     </div>
    
  </>
  )
}

export default BonusLayout