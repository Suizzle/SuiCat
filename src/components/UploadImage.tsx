{/* 

import { useCallback, useEffect, useState } from 'react'

import {
    getFullnodeUrl,
    ProgrammableTransaction,
    SuiClient,
  } from "@mysten/sui.js/client";

import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { bcs, PureArg } from "@mysten/sui.js/bcs";
import wallet from "../../test-wallet.json";
import { enrollment_object_id } from '../constants';

interface noop {
  type: "pure";
  value: Uint8Array;
  valueType: "vector<u8>";
}
import { readFileSync } from "fs";
//const fs = require("fs");
const keypair = Ed25519Keypair.fromSecretKey(new Uint8Array(wallet));
const client = new SuiClient({ url: getFullnodeUrl("testnet") });
const lion = readFileSync("./SampleVideo_1280x720_1mb.mp4");
const sleep = require("util").promisify(setTimeout);

const UploadImage = () => {

    async function uploadImage() {
        const txb = new TransactionBlock();
        //   let sub_array: number[] = [];
        //   let metadata = Buffer.from(
        //     JSON.stringify({ name: "SampleVideo_1280x720_1mb", mime: "video/mp4" })
        //   );
        //   txb.moveCall({
        //     target: `${enrollment_object_id}::noop::noop`,
        //     arguments: [txb.pure(bcs.vector(bcs.u8()).serialize(metadata).toBytes())],
        //   });
        
       let chunks = splitFile(lion, 1000);
        console.log(chunks.length);
            await transfer(chunks, txb);
            await sleep(200);
        }
        //await transfer(split_chunks, txb);
        
        //   for (let i = 0; i < chunks.length; i++) {
        //     txb.moveCall({
        //       target: `${enrollment_object_id}::noop::noop`,
        //       arguments: [
        //         txb.pure(bcs.vector(bcs.u8()).serialize(chunks[i]).toBytes()),
        //       ],
        //     });
        //   }
        //   let txid = await client.signAndExecuteTransactionBlock({
        //     signer: keypair,
        //     transactionBlock: txb,
        //   });
        //   console.log(`Success! Check our your TX here:
        //     https://suiexplorer.com/txblock/${txid.digest}?network=devnet`);
        //}
        
        async function transfer(chunks:any, txb:any) {
            
        
            for (let i = 0; i < chunks.length; i++) {
                const txb = new TransactionBlock();
                txb.moveCall({
                target: `${enrollment_object_id}::noop::noop`,
                arguments: [
                    txb.pure(bcs.vector(bcs.u8()).serialize(chunks[i]).toBytes()),
                ],
                });
            }
            let txid = await client.signAndExecuteTransactionBlock({
                signer: keypair,
                transactionBlock: txb,
            });
            console.log(`Success! Check our your TX here:
                https://suiexplorer.com/txblock/${txid.digest}?network=devnet`);
        }
        
        function splitFile(bytes: Uint8Array, size: number) {
        const chunks = [];
        for (let i = 0; i < bytes.length; i += size) {
            chunks.push(bytes.slice(i, i + size));
        }
        return chunks;
        }
    return (
        <div className='flex flex-col gap-6'>

        </div>
    )
}

export default UploadImage;
*/}