class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @cups = Array.new(14){Array.new([:stone, :stone, :stone, :stone])}
    @name1 = name1
    @name2 = name2
    cups[6] = []
    cups[13] = []
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" if start_pos > 14 || start_pos <= 0
  end

  def make_move(start_pos, current_player_name)
    num_stones = cups[start_pos].length
    cups[start_pos] = []

    cups[6] << [:stone]
    (1..4).each do |x|
      cups[x] << :stone
    end

    render
    :switch
  end

  def next_turn(ending_cup_idx)
    # helper method to determine what #make_move returns
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    cups[1..6].all?{|x| x.empty?} || cups[1..6].all?{|x| x.empty?}
  end

  def winner
    return :draw if cups[13].length == cups[6].length
    return @name1 if cups[13].length < cups[6].length
    return @name2 if cups[13].length > cups[6].length
  end
end
