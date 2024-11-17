import { MouseEvent, useContext, useEffect, useRef } from 'react';
import {
  ChartActions,
  DataPointsProps,
  GenericChartProps,
} from '../../../types/chart';
import { SharedCrosshairContext } from '../../../context/Charts/SharedCrosshair/SharedCrosshair';

const withSharedCrosshair = <T extends Record<string, Array<DataPointsProps>>>(
  Element: React.ComponentType<GenericChartProps<T>>
) => {
  return (props: GenericChartProps<T>) => {
    const ref = useRef<ChartActions | null>(null);
    const { updateCrosshair, position } = useContext(SharedCrosshairContext);

    useEffect(() => {
      if (ref.current && position) {
        ref.current.setCrosshair(position);
      }
    }, [position]);

    const mouseMoveHandler = (e: MouseEvent) => {
      if (ref.current) {
        const mousePosition = ref.current.getMousePositionOnXAxis(e.pageX);

        if (position !== mousePosition) {
          updateCrosshair(mousePosition);
          ref.current.setCrosshair(mousePosition);
        }
      }
    };

    return (
      <div onMouseMove={mouseMoveHandler}>
        <Element
          {...props}
          ref={ref}
        />
      </div>
    );
  };
};

export default withSharedCrosshair;
