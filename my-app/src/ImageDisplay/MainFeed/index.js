import pic from "../images/bluetit.jpg";
import { data } from "../data.js";
export function MainFeed() {
    const feedItems = data.map((item) => (
        <img key={item.id} src={item.image} alt={item.description} />
    ));
    return <ul id="main-feed">{feedItems}</ul>;
}
