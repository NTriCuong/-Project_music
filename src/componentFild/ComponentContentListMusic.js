import ComponentLiFild from "./ComponentLiFild";

function ComponentContentListMusic({ dataBXHNB, onClick }) {
  return (
    <div>
      <h1>Bản xếp hạng nổi bật</h1>
      <ul className="content-list">
        {dataBXHNB.map((data) => {
          return (
            <ComponentLiFild
              className="content-list-item"
              data={data}
              onClick={() => onClick(data)}
            />
          );
        })}
      </ul>
    </div>
  );
}
export default ComponentContentListMusic;
