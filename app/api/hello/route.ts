import { NextRequest, NextResponse } from 'next/server';
import { mock, Random } from 'mockjs';

export const GET = async (req: NextRequest) => {
  return NextResponse.json(mock({
    'list|1-10': [{
      'name|1': [Random.cname(), Random.cname(), Random.cname()],
      birth: Random.date('yyyy-MM-dd'),
      addr: Random.county(true)
    }]
  }));
}
