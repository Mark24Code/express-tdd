var capitalize = require("../capitalize");

var chai = require("chai");
var expect = chai.expect;

describe("首字母大写模块", function() {

    it("测试首字母大写", function() {
        expect(capitalize("express")).to.equal("Express");
        expect(capitalize("cats")).to.equal("Cats");
    });

    it("测试剩余部分小写", function() {
        expect(capitalize("javaScript")).to.equal("Javascript");
    });

    it("测试空字符串", function() {
        expect(capitalize("")).to.equal("");
    });

    it("测试空格符串", function() {
        expect(capitalize("  ")).to.equal("  ");
    });

    it("测试空格符串", function() {
        expect(capitalize("123")).to.equal("123");
    });

    it("测试多字母字符串", function() {
        expect(capitalize("what is Express?")).to.equal("What is express?");
        expect(capitalize("i love lamp")).to.equal("I love lamp");
    });

    it("测试本来就好的", function() {
        expect(capitalize("Express")).to.equal("Express");
        expect(capitalize("Evan")).to.equal("Evan");
        expect(capitalize("Catman")).to.equal("Catman");
    });

    it("测试字符串对象", function() {
        var str = new String("who is JavaScript?");
        expect(capitalize(str)).to.equal("Who is javascript?");
        expect(str.valueOf()).to.equal("who is JavaScript?");
    });


})
