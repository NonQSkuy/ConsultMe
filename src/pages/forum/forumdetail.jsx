import {Image, Avatar} from "@nextui-org/react";

export default function ForumDetail() {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center ">
                <Image
                    isBlurred
                    src="https://nextui.org/images/hero-card-complete.jpeg"
                    alt="NextUI Album Cover"
                    className="m-5 w-full h-[300px]"
                />
            </div>
        
            <div className="max-w-[800px] flex flex-col my-5 pl-5">
                <div className="flex">
                    <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-1.png" className="mx-5"/>
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">Onggo</h4>
                        <h5 className="text-small tracking-tight text-default-400">@ponggo</h5>
                    </div>
                </div>
                <p className="px-3 text-[30px] font-bold my-5">Lorem Ipsum Dolor, Sit Amet</p>
                <p className="px-3 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora nemo incidunt reiciendis obcaecati sed tenetur officia reprehenderit provident nostrum consectetur consequuntur velit, in dolorem mollitia minima rem delectus impedit magnam.</p> 
                
                <p className="py-3 px-3 underline font-bold">Comments</p> 

                <div className="flex my-5">
                    <Avatar isBordered radius="full" src="https://randomuser.me/api/portraits/men/2.jpg" className="mx-5"/>
                    <div className="max-w-[700px]">
                        <h4 className="text-small font-semibold leading-none text-default-600">Vincent</h4>
                        <p className="text-[15px] mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora nemo incidunt reiciendis obcaecati sed tenetur officia reprehenderit provident nostrum consectetur consequuntur velit, in dolorem mollitia minima rem delectus impedit magnam.</p> 
                    </div>
                </div>   

                <div className="flex my-5">
                    <Avatar isBordered radius="full" src="https://randomuser.me/api/portraits/women/1.jpg" className="mx-5"/>
                    <div className="max-w-[700px]">
                        <h4 className="text-small font-semibold leading-none text-default-600">Junthau</h4>
                        <p className="text-[15px] mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora nemo incidunt reiciendis obcaecati sed tenetur officia reprehenderit provident nostrum consectetur consequuntur velit, in dolorem mollitia minima rem delectus impedit magnam.</p> 
                    </div>
                </div>   

                <div className="flex my-5">
                    <Avatar isBordered radius="full" src="https://randomuser.me/api/portraits/women/1.jpg" className="mx-5"/>
                    <div className="max-w-[700px]">
                        <h4 className="text-small font-semibold leading-none text-default-600">Junthau</h4>
                        <p className="text-[15px] mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora nemo incidunt reiciendis obcaecati sed tenetur officia reprehenderit provident nostrum consectetur consequuntur velit, in dolorem mollitia minima rem delectus impedit magnam.</p> 
                    </div>
                </div>   
            </div>  

            
                
        </div>
    );
}