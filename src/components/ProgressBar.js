function ProgressBar({ step }) {
  const percent = (480 / 12) * step;

  /**
   * 480 / 12
   */

  return (
    <div className="progressbar">
      <div className="percent" style={{ width: percent }}></div>
    </div>
  );
}

export default ProgressBar;
