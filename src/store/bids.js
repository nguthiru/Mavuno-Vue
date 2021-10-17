
import base from "../main";

export default{
    namespaced:true,
    state: {
        bids: []
    },
    getters:{
        my_bids(state){
            return state.bids;
        
        },
    },
    
    mutations:{
        SET_BIDS(state,bids){
            state.bids = bids;
        }
    },
    actions: {
        async get_bids({commit}){
            try{
                const data = await base.get('customers/bids/');
                commit("SET_BIDS",data.data);


            }
            catch(e){
                console.log(e);

            }

        },
        async filter_bids(item){
            console.log(item);
    
        }

    },


  
  };
  