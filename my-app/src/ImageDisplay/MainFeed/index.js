import { data } from "../data.js";
export function MainFeed() {
    const feedItems = data.map((item) => (
        <img src={item.image} alt={item.description} />
    ));
    return <ol>{feedItems}</ol>;
}
