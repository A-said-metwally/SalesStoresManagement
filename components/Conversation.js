import React from 'react'

function Conversation() {
  return (
    <div className=' flex-1  overflow-auto pr-3  '>
        <p className='mb-0 mt-3 leading-6 text-lg text-justify'>
            {`2022 LinkedIn Ireland Unlimited Company, Wilton Plaza, Wilton Place, Dublin 2
            LinkedIn is a registered business name of LinkedIn Ireland Unlimited Company. 
            LinkedIn and the LinkedIn logo are registered trademarks of LinkedIn.`.repeat(1000)}
        </p>
    </div>
)
}

export default Conversation