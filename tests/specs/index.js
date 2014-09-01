/**
 * Path spec for kissy
 * @author yiminghe@gmail.com
 */
/*jshint quotmark:false*/

var Path = require('path');
describe("path", function () {
    it("resolve works", function () {
        expect(Path.resolve('x', 'y', "..", "z", ".")).to.equal("x/z");
        expect(Path.resolve('x', "./y")).to.equal("x/y");
        expect(Path.resolve("/x", "./y")).to.equal("/x/y");
    });

    it("normalize works", function () {
        expect(Path.normalize("x/y/z/../q/./")).to.equal("x/y/q/");
        expect(Path.normalize("x/y/z/../q/.")).to.equal("x/y/q");
    });

    it("join works", function () {
        expect(Path.join('x', 'y', "..", "z", ".")).to.equal("x/z");
    });

    it("relative works", function () {
        expect(Path.relative("x/y/z", "x/y")).to.equal("..");
        expect(Path.relative("x/y/z/", "x/y")).to.equal("..");
        expect(Path.relative("x/y/", "x/y/z/q")).to.equal("z/q");
        expect(Path.relative("x/y", "x/y/z/q")).to.equal("z/q");
        expect(Path.relative("x/y", "x/y/z/q/")).to.equal("z/q");
        expect(Path.relative('x/t/z','x/')).to.equal('../..');
    });

    it("basename works", function () {
        expect(Path.basename("x/y")).to.equal('y');
        expect(Path.basename("x/")).to.equal("x/");
        expect(Path.basename('x')).to.equal('x');
        expect(Path.basename("x.htm")).to.equal("x.htm");
        expect(Path.basename("x.htm", ".htm")).to.equal('x');
    });

    it("dirname works", function () {
        expect(Path.dirname("x/y")).to.equal('x');
        expect(Path.dirname("x/")).to.equal(".");
        expect(Path.dirname("/x/")).to.equal("/");
    });

    it("extname works", function () {
        expect(Path.extname("x.htm")).to.equal(".htm");
        expect(Path.extname('x')).to.equal("");
    });
});