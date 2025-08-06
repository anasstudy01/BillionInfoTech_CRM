import React from 'react'
import DashboardNav from '../Components/main/DashboardNav'
import BonusCard from '../Components/main/BonusCard'

const BonusLayout = () => {
  return (<>
  
  <DashboardNav />
  
    
        
    <div className="bonus-container flex m-4 gap-4 flex-wrap">
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