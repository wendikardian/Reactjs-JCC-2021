import { Card } from 'antd';
import 'antd/dist/antd.css';
import { useHistory} from 'react-router-dom';

const { Meta } = Card;
const MovieItem = (props) => {
    const history = useHistory();
    const gameDetail = () => {
        history.push(`/game/detail/${props.id}`)
    }
    return (
        <>
            <Card
                onClick={gameDetail}
                hoverable
                style={{ width: 240, height : 500 }}
                cover={<img alt="example" style={{height: 340, objectFit : "cover"}} src={props.image_url}  />}>
                <Meta title={props.name} description={props.genre} />
                <Meta  description={"For : " +  props.platform } />
                <Meta  description={"Year Release : " + props.release} />
            </Card>
        </>
    );
}

export default MovieItem;