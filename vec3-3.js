var Vec3 = function(x, y, z) 
			{
				this.x = x;
				this.y = y;
				this.z = z;
			}
Vec3.prototype.min = function()
			{
				var min = this.x;
				if(this.y < min)
					min = this.y;
				if(this.z < min)
					min = this.z;

				return min;
			}
Vec3.prototype.mid = function()
{
	var a = this.x;
	var b = this.y;
	var c = this.z;
	if((a > b && a < c) || (a < b && a > c))
		return a;
	else if ((b > a && b < c) || (b < a && b > c)) 
		 	return b;
	else if((c > b && c < a) || (c < b && c > a))
		 return c;
}
Vec3.prototype.max = function()
			{
				var max = this.x;
				if(this.y > max)	
					max = this.y;
				if(this.z > max)
					max = this.z;

				return max;
			}

			