

var itemList = [
    {
        name: 'Sleeping Bag w/ Stuff Sack',
        quantity: 1,
        price: 44.99
    },
    {
        name: 'Chocolate Energy Bar',
        quantity: 4,
        price: 2.99 * 4
    },
    {
        name: '2-Person Polyethylene Tent',
        quantity: 1,
        price: 104.33
    }
];
var priceToUSDString = function(price) {
    return "$" + price.toFixed(2);
};
var ShoppingItemRow=React.createClass({
    render:function(){
        return (
            <div>
                <ul>
                    <li className="name">{this.props.item.name}</li>
                     <li className="quantity">{this.props.item.quantity}</li>
                      <li className="price">{priceToUSDString(this.props.item.price)}</li>
                </ul>
            </div>
        );
    }
});

var ShoppingTotalComponment=React.createClass({
    render:function(){
        var total=0;
        var item;

        for(var itemNum in this.props.items){
            item=this.props.items[itemNum];
            total+=item.price;
        }
        return (
            <div>
                <li>Total:</li><li>{priceToUSDString(total)}</li>
            </div>
        );
    }
})
var ShopingListComponent=React.createClass({

    render:function(){
        var itemRow=this.props.items.map(function(item){
            return <ShoppingItemRow item={item} key={item.name}/>;
        })
        return (
            <div>
            <ShoppingTotalComponment items={this.props.items}/>
                <ol className='items'>
                    {itemRow}
                </ol>
                
            </div>
        );
    }
});

ReactDOM.render(<ShopingListComponent items={itemList}/>,document.getElementById('content'));