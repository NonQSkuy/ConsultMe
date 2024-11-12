import Cards from "./components/cards";
import Creators from "./components/creators";
import CreateForum from "./components/createForum";

export default function Forum() {
    return (
        <div className="flex justify-around mx-[20vw]">
            <Cards/>
            <div>
                <CreateForum/>
                <Creators/>
            </div>
            
        </div>
    );
}