var capitalize = require("../capitalize");

var chai = require("chai");
var expect = chai.expect;

describe("首字母大写模块",function(){

    it("测试首字母大写",function(){
        expect(capitalize("express")).to.equal("Express");
        expect(capitalize("cats")).to.equal("Cats");
    });

    it("测试剩余部分小写",function(){
        expect(capitalize("javaScript")).to.equal("Javascript");
    });

    it("测试空字符串",function(){
        expect(capitalize("")).to.equal("");
    });

    it("测试空格符串",function(){
        expect(capitalize("  ")).to.equal("  ");
    });

    it("测试空格符串",function(){
        expect(capitalize("123")).to.equal("123");
    });
})