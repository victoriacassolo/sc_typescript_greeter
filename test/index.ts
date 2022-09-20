import { expect } from 'chai';
import { ethers } from 'hardhat';
import { Greeter__factory } from '../typechain-types';

describe('Greeter', function () {
  it("Should return the new greeting once it's changed", async function () {
    const signers = await ethers.getSigners();
    const greeter = await new Greeter__factory(signers[0]).deploy(
      'Hello World'
    );

    expect(await greeter.greet()).to.equal('Hello World');

    await greeter.setGreeting('Helo');

    expect(await greeter.greet()).to.equal('Helo');
  });
});
