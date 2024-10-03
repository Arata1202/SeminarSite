export const revalidate = 60;

export default async function Page() {
  return (
    <div style={{ marginTop: '120px', marginBottom: '120px' }}>
      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 main_side">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                鈴木 寛ゼミナール
              </h2>
              <div className="mt-10 text-center text-4xl">消費者行動 × 企業戦略</div>
              <p className="mt-10 text-xl leading-8 text-gray-600">
                鈴木ゼミナールでは、日ごろの購買行動について解明を試み、『消費者の視点』と、消費者を引きつけて商品を買ってもらうための戦略を策定する『企業の視点』の双方を理解することに努めています。経営学部内のゼミや他大学との交流を通じて、消費者行動学を追求します。
              </p>
            </div>
            {/* 済み */}
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <img
                  alt=""
                  src="images/top/81D4A81A-8979-4160-9C6B-E01A353169F5.jpeg"
                  className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              {/* 済み */}
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                  <img
                    alt=""
                    src="images/top/2A551869-3AA7-41BF-B32D-ECEF06ECC2C8_1_201_a.jpeg"
                    className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <img
                    alt=""
                    src="images/top/648085C8-898B-4E50-B62C-93DA654B235E.jpeg"
                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                {/* 済み */}
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <img
                    alt=""
                    src="images/top/131D523B-BD66-4FE2-9E40-39E19F2BA8D3.jpeg"
                    className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
