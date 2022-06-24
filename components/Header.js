import Image from "next/image";
import Link from "next/link";
import {
 DocumentReportIcon ,
 IdentificationIcon , 
 UserAddIcon ,
 PaperClipIcon , 
 PrinterIcon ,
 FolderAddIcon ,
 ArrowCircleLeftIcon ,
 ArrowCircleRightIcon ,
 DocumentRemoveIcon ,
 FolderRemoveIcon
} from '@heroicons/react/outline'

export default function Header({ prev , next , New, print , total}) {
  
  return (
    <div className=" shadow-md">
      <nav className=" flex  ">
        <div className=" flex flex-1 items-center">
          <div className=" flex  space-x-4 text-md  font-semibold">
          <Link href="#">
              <div className=" flex flex-col group items-center p-2 cursor-pointer hover:bg-slate-100  rounded-full">
                <DocumentReportIcon className=" h-6 w-6 text-blue-600"/>
                <span className=" text-gray-500 group-hover:text-red-600">Report</span>
              </div>
            </Link>
            <Link href="#">
              <div className=" flex flex-col group items-center p-2  cursor-pointer hover:bg-slate-100 rounded-full">
                <IdentificationIcon className=" h-6 w-6 text-blue-600"/>
                <span className=" text-gray-500 group-hover:text-red-600">Add Items</span>
              </div>
            </Link>
            <Link href="#">
              <div className=" flex flex-col group items-center p-2  cursor-pointer hover:bg-slate-100 rounded-full">
                <UserAddIcon className=" h-6 w-6 text-blue-600"/>
                <span className=" text-gray-500 group-hover:text-red-600">Users</span>
              </div>
            </Link>
          </div>

          {/* start Pill Amount */}
          <div className="ml-20">
            <div className=" flex justify-center p-2 pl-14 pr-14
              bg-green-300 text-3xl text-blue-600  shadow-md border 
             font-bold rounded-full">
            { total}$
            </div>
          </div>
          {/* end Pill Amount */}

          <div className="ml-20 relative">
            <div className="flex space-x-4 relative text-md text-blue-600 font-semibold" >
              <div 
                  className=" flex flex-col mr-12 group items-center p-2 cursor-pointer hover:bg-slate-100  rounded-full"
                  onClick={print}>
                  <PrinterIcon className=" h-6 w-6 text-blue-600"/>
                  <span className=" text-gray-500 group-hover:text-red-600">Print</span>
              </div>             
              <div 
                className=" flex flex-col group items-center p-2 cursor-pointer hover:bg-slate-100  rounded-full"
                onClick={prev}
                >
                <ArrowCircleLeftIcon className=" h-6 w-6 text-blue-600"/>
                <span className=" text-gray-500 group-hover:text-red-600">Prev</span>
              </div>
              <div 
                className=" flex flex-col h-16 w-16 group items-center
                 p-2 cursor-pointer hover:bg-slate-400 border border-orange-400 shadow-lg  bg-green-500  rounded-full"
                 onClick={New}
              >
                <FolderAddIcon className=" h-6 w-6 text-white"/>
                <span className=" text-white ">New</span>
              </div>
              <div 
                className=" flex flex-col group mr-9  items-center p-2 cursor-pointer hover:bg-slate-100  rounded-full"
                onClick={next}
                >
                <ArrowCircleRightIcon className=" h-6 w-6 text-blue-600"/>
                <span className=" text-gray-500 group-hover:text-red-600">Prev</span>
              </div>
              <div className=" flex flex-col group items-center p-2 cursor-pointer hover:bg-slate-100  rounded-full">
                <FolderRemoveIcon className=" h-6 w-6 text-red-600"/>
                <span className=" text-red-600 group-hover:text-red-600">Delete</span>
              </div>

            </div>
          </div>
        </div>

        <div>
          <img 
          src="/logo.Jpg" alt="userImage"
          className=" h-14 w-14 rounded-full shadow-lg hover:scale-105"
          />
        </div>
      </nav>
    </div>
  );
}
