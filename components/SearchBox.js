
export default function SearchBox(){
    return(
        <div className='focus-within:bg-blue-200 border-1 border-gray-400 pt-1 pb-1 pr-2 pl-2'>
            <div className='flex justify-between items-center bg-white '>
            <input 
                type="text" 
                placeholder='Search Current Mailbox'
                className='p-1 flex-1 focus:outline-none srch-input'  />
            <i className="text-gray-500 fas fa-search pr-2"></i>
            </div>
        </div>
)
}