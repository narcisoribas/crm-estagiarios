// =============================================
// TaskDistribution Component
// This component shows a donut chart made with
// pure CSS (conic-gradient) and a legend.
// =============================================

function TaskDistribution() {
  return (
    <div className="card">
      <h2 className="card-title">Task Distribution</h2>

      <div className="chart-container">
        {/* Donut chart using CSS conic-gradient */}
        <div className="donut">
          {/* The hole in the center */}
          <div className="donut-hole"></div>
        </div>

        {/* Chart legend */}
        <div className="chart-legend">
          <div className="legend-item">
            <span className="legend-dot orange"></span>
            Pending
          </div>
          <div className="legend-item">
            <span className="legend-dot blue"></span>
            In Progress
          </div>
          <div className="legend-item">
            <span className="legend-dot green"></span>
            Completed
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDistribution;
