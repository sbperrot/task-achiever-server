import Items from "../models/item.class";

describe('Items', () => {

    it('should return the first item', () => {
        expect(Items.getFirstItems()).toBe('Item1');
    });

})