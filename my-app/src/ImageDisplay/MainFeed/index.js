import { data } from "../data.js";
export function MainFeed() {
    const feedItems = data.map((item) => (
        <img key={item.id} src={item.image} alt={item.description} />
    ));
    return <ol id="main-feed">{feedItems}</ol>;
}
