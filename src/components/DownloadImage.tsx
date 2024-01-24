'use client';
import { useCallback, useEffect, useState } from 'react';
import {
    placeHolderImg,
    placeHolderVid,
} from "../constants";

import {
    getFullnodeUrl,
    ProgrammableTransaction,
    SuiClient,
  } from "@mysten/sui.js/client";

const client = new SuiClient({ url: getFullnodeUrl("testnet") });

interface noop {
  type: "pure";
  value: Uint8Array;
  valueType: "vector<u8>";
}

const DownloadImage = () => {

    const[suiCatImg, setSuiCatImg] = useState(placeHolderImg);

    async function downloadImage() {
        let digest = document.getElementById("imgPtbId") as HTMLInputElement;
        let digestValue = digest.value;
        try {
          let res = await client.getTransactionBlock({
            digest:  digestValue,
            options: { showInput: true },
          });
          const transactionKindName = res.transaction?.data.transaction.kind;
          const isProgrammableTransaction =
            transactionKindName === "ProgrammableTransaction";
          const programmableTxn = res.transaction!.data
            .transaction as ProgrammableTransaction;
          const meta = programmableTxn.inputs[0] as noop;
          //const meta = programmableTxn.inputs[3] as noop;
          const jsonString = Buffer.from(meta.value).toString('utf8')
          const parsedData = JSON.parse(jsonString)
          let inputbytes = Buffer.alloc(0);
          for (let i = 1; i < programmableTxn.inputs.length; i++) {
            const input = programmableTxn.inputs[i] as noop;
            let input_buffer = Buffer.from(input.value);
            inputbytes = Buffer.concat([inputbytes, input_buffer]);
          }
          const buffer = Buffer.from(inputbytes);
          const base64String = buffer.toString('base64');
          setSuiCatImg("data:"+parsedData.mime+";base64,"+base64String); 
    
          console.log(suiCatImg.length);
        } catch (e) {
          console.log(e);
        }
      }
    

    return (
        <div className='flex flex-col gap-6'>
            <button
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            onClick={downloadImage}
            >
            <h2 className={`mb-3 text-2xl font-semibold`}>
                SuiCat Image{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
                </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Load SuiCat image from Transaction Block Id
            </p>
            </button>
            <input id="imgPtbId" type="text" placeholder="Enter noop image transaction block ID"></input>
        </div>
    )
}

export default DownloadImage;