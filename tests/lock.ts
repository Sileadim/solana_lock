import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { Lock } from '../target/types/lock';

describe('lock', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.Lock as Program<Lock>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
