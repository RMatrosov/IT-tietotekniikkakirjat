import {useSelector} from "react-redux";
import {AppStateType} from "../redux/store";
import {Button} from "@material-ui/core";



const Test = () => {


    const {cartList} = useSelector((state: AppStateType) => state.cart);

    console.log(cartList)



    return (
        <>
            <Button/>
        </>
    )


}

export default Test

