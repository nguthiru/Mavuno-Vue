import base from '../main'
export default {
    namespaced:true,
    state:{
        cart_items: []
    },
    getters:{
        cart_items(state){
            return state.cart_items;
        },
        cart_total(state){
            let total = 0;
            state.cart_items.forEach(element => {
                let subTotal = element.item.price * element.quantity;
                total+=subTotal
                
            });
            return total;
        }


    },
    mutations:{
        SET_ITEMS(state,items){
            state.cart_items = items

        }
    },
    actions:{

        async get_cart_items({commit}){
            const response = await base.get('customers/cart/');
            commit("SET_ITEMS",response.data);
            
        },
        async remove_items({dispatch},item){
            const response = await base.delete(`customers/cart/${item.id}/`);

            if(response.status==204){
                dispatch("get_cart_items");
            }
        },
        async addToCart({dispatch},item){
            const postData = {item_id:item.id,quantity:item.quantity};
            const response = await base.post('customers/cart/',postData);
            if(response.status<=210){
                dispatch("get_cart_items");
            }
        }
    }
}