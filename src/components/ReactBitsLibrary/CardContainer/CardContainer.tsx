interface CardContainerProps {
  iconSrc?: string;
  title?: string;
  description?: string;
}

function CardContainer({ iconSrc, title, description }: CardContainerProps) {
  return (
    <div className="grid-section">
      <div className="col-sm-2 p-1">
        <img src={iconSrc}></img>
      </div>
      <div className="grid-section-title">
        <h4>
          <b>{title}</b>
        </h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default CardContainer;
